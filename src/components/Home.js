import React from 'react'
import axios from 'axios'

class Home extends React.Component {
    state = {
        privateInfo: {},
        authorized: false
    }

    componentDidMount() {
        this.getPrivateData()
    }

    getPrivateData = () => {
        let url = "http://localhost:3000/private"
        axios.get(url, { withCredentials: true })
            .then(res => {
                console.log(res)
                this.setState({ privateInfo: res.data })
            })
            .catch(e => {
                console.log(e)
                this.props.history.push('/login')
            })
    }

    render() {
        let { privateInfo } = this.state
        return (
            <div>
                <h1>Home</h1>
                <h2>{privateInfo.message}</h2>
            </div>
        )
    }
}

export default Home