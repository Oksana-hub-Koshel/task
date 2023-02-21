class NewsStoreService {
    location = "https://fakestoreapi.com/products/"


    async getSource(url) {
        return await fetch(`${this.location}${url}`)
            .then((res) => {
                    if (res.ok) {
                        return res.json()
                    }
                },
            )
            .catch((error) => console.log(error.message))

    }



    getAllNews = async () => {
        // return await this.getSource('/products/');
        return await fetch(`${this.location}`)
            .then((res) => {
                    if (res.ok) {
                        return res.json()
                    }
                },
            )
            .catch((error) => console.log(error.message))
    }

    getNew = async (id) => {
        return await this.getSource(`/products/${id}/`)

    }


}

export default new NewsStoreService()