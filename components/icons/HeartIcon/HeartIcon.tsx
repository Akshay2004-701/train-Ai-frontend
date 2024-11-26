interface HeartIconProps {
  filled?: boolean
}

export const HeartIcon = ({ filled = false }: HeartIconProps) => {
  return (
    <svg width="18" height="16" viewBox="0 0 18 16" fill="none">
      <path
        d="M2.18941 8.59793L9 14.8947L15.8106 8.59793C17.6112 6.93316 17.8291 4.16373 16.3109 2.2379C14.4019 -0.183738 10.6171 0.226717 9.27162 3.00129L9 3.5614L8.72839 3.00129C7.38291 0.226717 3.5981 -0.183738 1.6891 2.2379C0.170949 4.16373 0.388806 6.93316 2.18941 8.59793Z"
        {...(filled ? { fill: "currentColor" } : { stroke: "currentColor" })}
      />
    </svg>
  )
}
