interface FlagProps {
  img?: string
  title: string
  subtitle?: string
  classNames?: string
  list?: string[] | undefined
}

export const Flag: React.FC<FlagProps> = ({
  img,
  title,
  subtitle,
  list,
  classNames,
}) => {
  return (
    <>
      <div
        className={`flex md:flex-row flex-col flex-wrap md:gap-10 gap-2 lg:flex-nowrap px-4 max-w-lg ${classNames}`}
      >
        {!img ? (
          ''
        ) : (
          <div className="relative h-fit">
            <div className="w-full h-20">
              <img
                src={img}
                alt={title}
                className="w-fit h-full object-contain"
              />
            </div>
          </div>
        )}
        <div className="flex-1">
          <h6 className="font-bold text-orange">{title}</h6>
          {list && (
            <ul className="mt-2 list-disc list-outside pl-5">
              {list.map((item, ind) => {
                const keyVal = ind + 'flag'
                return (
                  <li dangerouslySetInnerHTML={{ __html: item }} key={keyVal} />
                )
              })}
            </ul>
          )}
        </div>
      </div>
    </>
  )
}
