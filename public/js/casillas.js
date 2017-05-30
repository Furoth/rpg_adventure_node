class casillas_obj{
	constructor(pos_x, pos_y,width_cas, height_cas ,id_cas,url_image, next){
		this.x = pos_x;
		this.y = pos_y;
		this.id = id_cas;
		this.width = width_cas;
		this.height = height_cas;
		this.image = url_image;
		this.next = next;
	}

	draw(){
		group_casillas.image(this.image, this.width, this.height).move(this.x, this.y).attr({id: this.id});
	}

}