export const getJSON = async id => {
  try {
    const res = await fetch(
      `https://my-json-server.typicode.com/Prochnost55/mockJSONApi/appId/${id}`,
    )
    if (!res.ok) throw new Error('Please enter a valid ID')
    const data = await res.json()
    return data
  } catch (err) {
    throw err.message
  }
}
