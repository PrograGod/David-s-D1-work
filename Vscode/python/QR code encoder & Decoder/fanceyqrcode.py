import qrcode

import qrcode.image.svg

factory = qrcode.image.svg.SvgPathImage
svg_img = qrcode.make("https://www.youtube.com/watch?v=c7nRTF2SowQ", image_factory=factory)

svg_img.save("Fancy.svg")

