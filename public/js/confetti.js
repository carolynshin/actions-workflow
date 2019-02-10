/*

Copyright (c) 2019 - https://codepen.io/simlind/pen/BZwjbv

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify,
merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall
be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.

*/

for (i = 0; i < 200; i++) {
  // Random rotation
  var randomRotation = Math.floor(Math.random() * 360)
  // Random width & height between 0 and viewport
  var randomWidth = Math.floor(Math.random() * Math.max(document.documentElement.clientWidth, window.innerWidth || 0))
  var randomHeight = Math.floor(Math.random() * Math.max(document.documentElement.clientHeight, window.innerHeight || 0))

  // Random animation-delay
  var randomAnimationDelay = Math.floor(Math.random() * 10)
  // console.log(randomAnimationDelay)

  // Random colors
  var colors = ['#0CD977', '#FF1C1C', '#FF93DE', '#5767ED', '#FFC61C', '#8497B0']
  var randomColor = colors[Math.floor(Math.random() * colors.length)]

  // Create confetti piece
  var confetti = document.createElement('div')
  confetti.className = 'confetti'
  confetti.style.top = randomHeight + 'px'
  confetti.style.left = randomWidth + 'px'
  confetti.style.backgroundColor = randomColor
  confetti.style.transform = 'skew(15deg) rotate(' + randomRotation + 'deg)'
  confetti.style.animationDelay = randomAnimationDelay + 's'
  document.getElementById('confetti-wrapper').appendChild(confetti)
}
