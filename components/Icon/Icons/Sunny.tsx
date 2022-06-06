import { IIcons } from "types/components/Icon"

export default function Sunny({ stroke }: IIcons) {
  return (
    <>
      <path
        fill="none"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 18.5a6.5 6.5 0 100-13 6.5 6.5 0 000 13z"
      ></path>
      <path
        fill="none"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19.14 19.14l-.13-.13m0-14.02l.13-.13-.13.13zM4.86 19.14l.13-.13-.13.13zM12 2.08V2v.08zM12 22v-.08.08zM2.08 12H2h.08zM22 12h-.08.08zM4.99 4.99l-.13-.13.13.13z"
      ></path>
    </>
  )
}
