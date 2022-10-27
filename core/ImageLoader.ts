export type ImageData = {
    base64: string;
    width: number;
    height: number;
}

function _getImageSize(url: string) {
    return new Promise<{width: number; height: number}>( (resolved, rejected) => {
        const img = new Image();
        img.src = url;
        img.onerror = () => {
            rejected("Image load failure!");
        }
        img.onload = () => {
            resolved({
                width: img.naturalWidth,
                height: img.naturalHeight,
            })
        };
    })
}

function imageUrlToBase64(url: string): Promise<ImageData> {
    const toImageData = (img: HTMLImageElement) => {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;

        const ctx = canvas.getContext('2d');
        ctx && ctx.drawImage(img, 0, 0);

        return {
            base64: canvas.toDataURL('image/png'),
            width: canvas.width,
            height: canvas.height,
        };
    };

    return new Promise(async (resolve, reject) => {
        const imageSize = await _getImageSize(url)
        const img: HTMLImageElement = new Image(imageSize.width, imageSize.height);
        img.src = url;
        img.crossOrigin = 'Anonymous';
        img.onload = () => {
            resolve(toImageData(img))
        }
    });
}

function loadImageFromDisk(): Promise<ImageData> {
    const onImageLoad = (e: ProgressEvent<FileReader>,  onSuccess: (data: ImageData) => void, onFailure: () => void) => {
        if (e.target && e.target.result) {
            const src = e.target.result.toString()
            _getImageSize(src).then(({width, height}) => {
                onSuccess({
                    base64: src,
                    width,
                    height,
                });
            })
        }
        else
        {
            onFailure()
        }
    }

    const onFileUpload = (input: HTMLInputElement, onSuccess: (data: ImageData) => void, onFailure: () => void) => {
        if (input.files && input.files[0].type.match('image.*')) {
            const reader = new FileReader();
            reader.readAsDataURL(input.files[0]);
            reader.onload = (e) => onImageLoad(e, onSuccess, onFailure)
        } else {
            alert("It's not an image!");
        }
    }

    return new Promise((resolve, reject) => {
        const input = document.createElement('input');
        input.style.display = 'none';
        input.type = 'file';
        input.onchange = () => onFileUpload(input, resolve, reject)
        document.body.appendChild(input);
        input.click();
    });
}

export {
    loadImageFromDisk,
    imageUrlToBase64,
}