import data from '../data';


function Navigation(){
	let {navigation}=data;

	// console.log(navigation);

	return(
		<div className="hd-menu">
			<nav className="gnb-wrap">
				<ul className="gnb">
					{/*
					<li className="no-depth">
						<a href="">Intro</a>
					</li>
					<li className="no-depth">
						<a href="">About</a>
					</li>
					<li>
						<a href="">Skill</a>
						<div className="depth">
							<ul>
								<li><a href="">Web</a></li>
								<li><a href="">Front End</a></li>
								<li><a href="">Back End</a></li>
							</ul>
						</div>
					</li>
					<li>
						<a href="">Portfolio</a>
						<div className="depth">
							<ul>
								<li><a href="">Oksuro</a></li>
								<li><a href="">Purito Seoul</a></li>
								<li><a href="">Lifeplus</a></li>
								<li><a href="">Men Noblesse</a></li>
								<li><a href="">b.state design</a></li>
							</ul>
						</div>
					</li>
					*/}

					{
						navigation.map((d1, i) =>
							d1.depth2 ?
							<li key={i+1}>
								<a href="">{d1.depth1}</a>
								<div className="depth">
									<ul>
										{
											d1.depth2.map((d2, j) =>
												<li key={j+1}>
													<a href="">{d2}</a>
												</li>
											)
										}
									</ul>
								</div>
							</li>
							:
							<li key={i+1} className="no-depth">
								<a href="">{d1.depth1}</a>
							</li>
						)
					}
				</ul>
			</nav>
			<span className="hd-mark"></span>
		</div>
	);
}

export default Navigation;