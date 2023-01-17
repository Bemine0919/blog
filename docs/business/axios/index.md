## 图片上传接口
```js
// 上传图片
export function uploadPic(data) {
    return request({
        url: '/fileinfo/upload',
        method: 'post',
        data,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}
```