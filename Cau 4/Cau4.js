class Rectangle {
    constructor(x, y, width, height, color) {
        this._x = x
        this._y = y
        this._width = width
        this._height = height
        this._color = color
    }

    render() {
        let c = document.getElementById("myCanvas")
        let ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.fillStyle = this._color
        ctx.fillRect(this._x, this._y, this._width, this._height);
        ctx.stroke();
    }

}


rectangle = new Rectangle(10, 10, 200, 100, "#000000")
rectangle.render()