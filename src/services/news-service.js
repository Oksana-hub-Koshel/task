class API {
    location = "https://fakestoreapi.com"

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
        return await this.getSource('/products?limit=6');

    }

    getNew = async (id) => {
        return await this.getSource(`/products/${id}/`)

    }


}

export default new API()