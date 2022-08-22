
export class LikeComponent {

    constructor(public likesCount: number, public isSelected: boolean) {
    }

    onClick() {
        // if (this.isSelected) {
        //     this.likesCount--;
        //     this.isSelected = false;
        // } else {
        //     this.likesCount++;
        //     this.isSelected = true;
        // }
        // the above code can be rewritten with the two following lines
        this.likesCount += (this.isSelected) ? -1 : +1;

        this.isSelected = !this.isSelected;
    }
}

// UPDATE from main.ts:

export class LikeComponent2 {

    constructor(private _likesCount: number, private _isSelected: boolean) {
    }

    onClick() {
        this._likesCount += (this._isSelected) ? -1 : +1;

        this._isSelected = !this._isSelected;
    }

    get likesCount() {
        return this._likesCount;
    }

    get isSelected() {
        return this._isSelected;
    }
}
