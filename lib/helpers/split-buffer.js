module.exports = function splitBuffer(size, buffer, encoding, target) {
  if (!buffer) return

  var length = buffer.length
  var chunks = ((length / size) | 0) + 1

  for (var i = 0; i < length; i += size) {
    target.push({
      buffer: buffer.slice(i, i + size),
      encoding: encoding
    })
  }
}
