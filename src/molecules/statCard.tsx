// import { StatsListType } from 'screens/home/stats'
import { StatsListType } from 'utils/homeTypes'

export function StatCard({ data }: { data: StatsListType }) {
  const { stat, desc, coverImage } = data
  return (
    <article className="h-full min-h-full p-2 md:p-3 blur-gradient-home border border-white borderopacity-30 rounded-md">
      <div className="rounded-md overflow-hidden relative z-10">
        <img
          src={coverImage as string}
          className="h-full w-full object-cover object-top"
          alt={stat}
          aria-hidden
        />
      </div>

      <div className="p-2 md:p-3 z-10">
        <div className="flex gap-2 py-4">
          <span className="w-5 h-[2px] bg-orange" />
          <span className="w-16 h-[2px] bg-orange" />
        </div>

        <h4 className="text-black font-medium tracking-wide leading-tight pb-2">
          {stat}
        </h4>
        <h6 className="text-black font-light leading-tight md:pb-8 pb-3 tracking-[0.5px] ">
          {desc}
        </h6>
      </div>
      <div className="absolute h-full w-full top-4 left-4 z-[-1] border rounded-md bg-white bg-opacity-10 border-orange " />
    </article>
  )
}
