class ApiResponse {
    constructor(status, data, message, responsecode) {
        this.status = status
        this.data = data
        this.message = message
        this.responsecode = responsecode
    }
}

module.exports = ApiResponse;