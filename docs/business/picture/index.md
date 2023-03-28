```js
/**
 * 图片blob转图片base64
 * @param blob 
 */
blobToBase64 (blob) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader()
    fileReader.onload = (e) => {
      resolve(e.target.result)
    }
    // readAsDataURL
    fileReader.readAsDataURL(blob)
    fileReader.onerror = () => {
      reject(new Error('blobToBase64 error'))
    }
  })
},
/**
 * 图片base64转blob
 * @param base64 base64图片
 */
base64ToBlob (base64) {
	let bstr = window.atob(base64),
  n = bstr.length,
  u8arr = new Uint8Array(n);
	while (n--) {
		u8arr[n] = bstr.charCodeAt(n)
	}
	return new Blob([u8arr], { type: base64})
}

// blob转换为file
blobToFile(theBlob, fileName) {
  theBlob.lastModifiedDate = new Date();  // 文件最后的修改日期
  theBlob.name = fileName;                // 文件名
  return new File([theBlob], fileName, {type: theBlob.type, lastModified: Date.now()});
},

// Axios获取blob文件
async getAxiosBlob(id) {
  console.log('开始接口')
  try {
    const res = await axios({
      method: 'get',
      url: '/czmh/apizhzs/zhyjxy/fileinfo/download',
      params: {
        tkappid: 10001,
        id: 1703
      },
      responseType: 'blob'
    })
    console.log(res, 'blob')
    const base64 = await this.blobToBase64(res.data)
    console.log(base64, 'bae64格式')
  }catch(err) {
    console.log(err)
  }
},
```