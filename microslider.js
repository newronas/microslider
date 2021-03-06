var MS_ = {
	
	container: null,
	speed: 200,
	stopped: true,
	stopped_timer: 2000,
	margin: 0,

	start: function(config) {

		MS_.container = document.getElementById(config.id)
		if(undefined != config.stopped_timer) {
			MS_.stopped_timer = config.stopped_timer;
		}

		if(undefined != config.speed) {
			MS_.speed = config.speed;
		}

		setTimeout(function(){
			MS_.stopped = false;
		}, MS_.stopped_timer);

		setInterval(function(){
			if(MS_.stopped == false){
				MS_.margin -=1;
				MS_.container.children[0].style.marginLeft = MS_.margin + '%';
				if(MS_.margin == -100) {
					var change_position = MS_.container.children[0];
					MS_.margin = 0;
					MS_.container.children[0].remove();
					MS_.container.appendChild(change_position);
					MS_.container.children[MS_.container.children.length - 1].style.marginLeft = 0;
					MS_.stopped = true;
					setTimeout(function(){
						MS_.stopped = false;
					}, MS_.stopped_timer);
				}
			}
		}, MS_.speed);
	}
};
