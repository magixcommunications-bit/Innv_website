import { FilledBtn } from 'atoms/buttons'
import React from 'react'

type Props = {
  title: string
  btnText?: string
  callback?: () => React.SetStateAction<any>
  subTitle?: string
}

const SectionTitleWithBtn: React.FC<Props> = ({
  title,
  btnText,
  callback,
  subTitle,
}) => {
  return (
    <div>
      <div className="py-4 rounded-md flex justify-between items-center border-b-1 border-solid border-gray mb-6">
        <h5 className="font-regular leading-tight tracking-wide">{title}</h5>

        {btnText && callback && (
          <FilledBtn
            buttonType="add"
            color="orange"
            size="large"
            text={btnText}
            type="button"
            extraClasses="!bg-opacity-90 !bg-lightorange hover:!bg-opacity-100 !text-black !font-regular"
            onClick={callback}
          />
        )}
      </div>

      {subTitle && (
        <div className="relative -mt-2">
          <h6>{subTitle}</h6>
        </div>
      )}
    </div>
  )
}

export default SectionTitleWithBtn
