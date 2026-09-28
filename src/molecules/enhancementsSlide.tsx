export default function EnhancementsSlide({
  coverImage,
  title,
  desc,
}: {
  title: string
  coverImage: string
  desc: string
}) {
  return (
    <article className="h-full w-full">
      <div className="flex w-full">
        <img
          src={coverImage}
          alt={title}
          className="w-full object-contain rounded-md"
        />
      </div>
      <div>
        <span className=" text-base md:text-base xl:text-xl 2xl:text-2xl font-medium leading-tight xl:leading-snug w-11/12 py-3.5 pb-2.5 block">
          {title}
        </span>
        <span className=" text-sm md:text-base xl:text-lg 2xl:text-xl font-light leading-tight w-11/12 block">
          {desc}
        </span>
      </div>
    </article>
  )
}
