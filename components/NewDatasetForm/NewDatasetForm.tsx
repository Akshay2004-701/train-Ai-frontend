"use client";

import { useForm, Controller } from "react-hook-form";
import { useState, useEffect, useCallback } from "react";
import { ethers } from "ethers";
import { useMutation } from "@tanstack/react-query";
import { useDropzone } from "react-dropzone";
import classNames from "classnames";
import { toast } from "sonner";

import { EyeIcon, EyeSlashIcon } from "@heroicons/react/16/solid";

import SimpleInput from "../Inputs/SimpleInput";
import { Selector, SelectorOption } from "../Inputs/Selector";
import EstimatedEarnings from "../EstimatedErnings/EstimatedErnings";
import { Button } from "../Button/Button";
import { uploadDataset } from "@/utils/requests/uploadDataset";

interface DatasetFormValues {
  name: string;
  visibility: string;
  fieldOfStudy: string;
  domains: string;
  method: string;
  clean: boolean;
  file?: File;
}

const visibilityOptions = [
  { value: "public", label: "Public", icon: <EyeIcon className="size-5 text-secondary" /> },
  { value: "private", label: "Private", icon: <EyeSlashIcon className="size-5 text-secondary" /> },
];

const fieldOfStudyOptions = [
  { value: "machine-learning", label: "Machine Learning" },
  { value: "data-science", label: "Data Science" },
  { value: "artificial-intelligence", label: "Artificial Intelligence" },
];

const domainOptions = [
  { value: "nlp", label: "Natural Language Processing" },
  { value: "cv", label: "Computer Vision" },
  { value: "rl", label: "Reinforcement Learning" },
];

const methodOptions = [
  { value: "classification", label: "Classification" },
  { value: "regression", label: "Regression" },
  { value: "dataVisualization", label: "Data Visualization" },
];

const NewDatasetForm = () => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const connectWallet = useCallback(async () => {
    if (typeof window === "undefined" || !window.ethereum) {
      toast.error("MetaMask is not installed");
      return;
    }

    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const network = await provider.getNetwork();

      if (network.chainId !== 56) {
        try {
          await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: "0x38" }],
          });
        } catch (switchError: any) {
          if (switchError.code === 4902) {
            await window.ethereum.request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  chainId: "0x38",
                  chainName: "Binance Smart Chain",
                  rpcUrls: ["https://bsc-dataseed.binance.org/"],
                  nativeCurrency: { name: "Binance Coin", symbol: "BNB", decimals: 18 },
                  blockExplorerUrls: ["https://bscscan.com/"],
                },
              ],
            });
          } else {
            toast.error("Please switch to Binance Smart Chain (BSC) in MetaMask.");
            return;
          }
        }
      }

      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      setWalletAddress(address);
      toast.success("Connected to Binance Smart Chain (BSC)");
    } catch (error) {
      toast.error("Failed to connect MetaMask.");
    }
  }, []);

  useEffect(() => {
    connectWallet();
  }, [connectWallet]);

  const { control, handleSubmit, setValue, reset } = useForm<DatasetFormValues>({
    defaultValues: {
      name: "",
      visibility: "public",
      fieldOfStudy: "machine-learning",
      domains: "nlp",
      method: "classification",
      clean: false,
    },
  });

  const uploadMutation = useMutation({
    mutationFn: uploadDataset,
    onSuccess: () => {
      toast.success("Dataset uploaded successfully");
      reset();
    },
    onError: (error: Error) => {
      toast.error(`Failed to upload dataset: ${error.message}`);
    },
  });

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        setValue("file", acceptedFiles[0]);
      }
    },
    [setValue]
  );

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({
    onDrop,
    accept: { "application/zip": [".zip"] },
    maxFiles: 1,
  });

  const onSubmit = (data: DatasetFormValues) => {
    if (!data.file) {
      toast.error("Please select a file to upload");
      return;
    }

    if (!walletAddress) {
      toast.error("Please connect MetaMask");
      return;
    }

    const payload = {
      dataset_name: data.name,
      field_of_study: data.fieldOfStudy,
      domain: data.domains,
      method: data.method,
      is_data_clean: data.clean,
      zipfile: data.file,
      walletAddress,
    };

    console.log({ payload });
    uploadMutation.mutate(payload);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="name"
        control={control}
        rules={{ required: "Dataset name is required" }}
        render={({ field }) => <SimpleInput label="Dataset Name" placeholder="Enter dataset title" {...field} />}
      />

      <Controller
        name="visibility"
        control={control}
        render={({ field: { value, onChange } }) => (
          <Selector
            label="Visibility"
            selected={visibilityOptions.find((option) => option.value === value) || visibilityOptions[0]}
            onChange={(option: SelectorOption) => onChange(option.value)}
            options={visibilityOptions}
          />
        )}
      />

      <Controller
        name="fieldOfStudy"
        control={control}
        render={({ field: { value, onChange } }) => (
          <Selector
            label="Field of Study"
            selected={fieldOfStudyOptions.find((option) => option.value === value) || fieldOfStudyOptions[0]}
            onChange={(option: SelectorOption) => onChange(option.value)}
            options={fieldOfStudyOptions}
          />
        )}
      />

      <div
        {...getRootProps()}
        className={classNames(
          "relative block w-full rounded-lg border-2 border-dashed p-12 text-center focus:outline-none focus:ring-2 focus:ring-primary",
          { "border-primary bg-primary/5": isDragActive }
        )}
      >
        <input {...getInputProps()} disabled={uploadMutation.isPending} />
        <span className="mt-2 block text-sm font-semibold text-secondary">
          {isDragActive ? "Drop the ZIP file here" : acceptedFiles.length > 0 ? acceptedFiles[0].name : "Drag & drop ZIP file, or click to select"}
        </span>
      </div>

      <div className="flex-1 flex items-center py-8 justify-between mt-12 border-t">
        <EstimatedEarnings number={100} currency="BNB" />
        <div className="flex items-center gap-4">
          {!walletAddress && (
            <Button type="button" variant="primary" onClick={connectWallet}>
              Connect Wallet
            </Button>
          )}
          <Button type="submit" variant="secondary" disabled={uploadMutation.isPending || !walletAddress}>
            {uploadMutation.isPending ? "Uploading..." : "Create"}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default NewDatasetForm;
