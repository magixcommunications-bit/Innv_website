export default function FeatureCard({
  title,
  desc,
}: {
  title: string
  desc: string
}) {
  return (
    <article className="flex flex-col gap-2">
      <h5 className="font-medium text-blue">{title}</h5>
      <h6
        className="font-regular text-base text-black text-opacity-80 flex-1 w-11/12 xl:w-10/12  leading-relaxed"
        dangerouslySetInnerHTML={{ __html: desc }}
      />
    </article>
  )
}
