/**
  ## edge method
  Brief description

  ### Parameters
    - imageData `Object`: ImageData object
    - option `Object` : Option object

  ### Example
      //code sample goes here
 */
function edge (imgData, option) {
  // check options object & set default variables
  option = option || {}
  option.monochrome = option.monochrome || false
  option.level = option.level || 1
  option.type = option.type || 'laplacian'

  // Check length of data & avilable pixel size to make sure data is good data
  var pixelSize = imgData.width * imgData.height
  var dataLength = imgData.data.length
  var colorDepth = dataLength / pixelSize
  if (colorDepth !== 4 && colorDepth !== 1) {
    throw new Error('ImageObject has incorrect color depth')
  }

  if(colorDepth === 4) {
    imgData = grayscale(imgData)
  }

  var types = {
    laplacian: [-1,-1,-1,-1,8,-1,-1,-1,-1]
  }
  if (!types[option.type]) {
    throw new Error('Could not find type of filter requested')
  }

  var f = types[option.type]
  return convolution(imgData, {
    filter: f,
    divisor: f.length / option.level,
    radius: 1,
    monochrome: option.monochrome
  })
}
