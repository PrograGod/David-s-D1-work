import qrcode

img = qrcode.make("Hello world")
img.save("myqrcode.png")


