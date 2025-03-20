export default function DotsAnimation() {
  return (
    <>
        <div className="absolute -z-40 inset-x-0 top-44 overflow-hidden">
            <div className="dots-left p-[0.08rem]"></div>
            <div className="dots-right p-[0.08rem]"></div>
        </div>
        <div className="absolute -z-40 rotate-90 inset-x-0 top-48 overflow-hidden lg:-top-56">
            <div className="dots-left p-[0.08rem]"></div>
            <div className="dots-right p-[0.08rem]"></div>
        </div>
    </>
  )
}
