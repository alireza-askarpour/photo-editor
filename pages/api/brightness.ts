import type { NextApiRequest, NextApiResponse } from "next"

const brightness = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json([
    {
      name: "Brightness",
      property: "brightness",
      value: 100,
      range: {
        min: 10,
        max: 200,
      },
      unit: "%",
    },
    {
      name: "Contrast",
      property: "contrast",
      value: 100,
      range: {
        min: 10,
        max: 200,
      },
      unit: "%",
    },
    {
      name: "Saturation",
      property: "saturate",
      value: 100,
      range: {
        min: 0,
        max: 200,
      },
      unit: "%",
    },
    {
      name: "Grayscale",
      property: "grayscale",
      value: 0,
      range: {
        min: 0,
        max: 100,
      },
      unit: "%",
    },
    {
      name: "Sepia",
      property: "sepia",
      value: 0,
      range: {
        min: 0,
        max: 100,
      },
      unit: "%",
    },
    {
      name: "Hue Rotate",
      property: "hue-rotate",
      value: 0,
      range: {
        min: 0,
        max: 360,
      },
      unit: "deg",
    },
    {
      name: "Invert",
      property: "invert",
      value: 0,
      range: {
        min: 0,
        max: 100,
      },
      unit: "%",
    },
    {
      name: "Opacity",
      property: "opacity",
      value: 100,
      range: {
        min: 10,
        max: 100,
      },
      unit: "%",
    },
    {
      name: "Blur",
      property: "blur",
      value: 0,
      range: {
        min: 0,
        max: 20,
      },
      unit: "px",
    },
  ])
}

export default brightness
