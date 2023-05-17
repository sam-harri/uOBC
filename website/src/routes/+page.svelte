<script lang="ts">
	import ClassRegistration from '$lib/ClassRegistration.svelte';
	import MeetTheTeam from '$lib/MeetTheTeam.svelte';
</script>

<div class="page-container">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="row">
					<div class="col-md-7 image-column d-flex justify-content-end">
						<img
							src="https://via.placeholder.com/500x500"
							alt="BoxingCollage"
							class="img-fluid mr-5"
						/>
					</div>
					<div class="col-md-5 text-column d-flex align-items-center">
						<div class="ml-3">
							<h1><span class="uO">uO</span><span class="lighter">BoxingClub</span></h1>
							<p class="lighter">The Toughest Club on Campus.</p>
							<button>Join Us For a Class</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="aboutus" id="aboutus">
    <div class="container white">
        <div class="row">
            <div class="col-md-8 mx-auto">
                <h1 class="text-center">About Us</h1>
                <hr class="custom-hr-light" />
                <p class="text-center">
                    Welcome to the University of Ottawa Boxing Club! Founded by a passionate group of students
                    and coaches, our mission is to make boxing an accessible, inclusive, and less intimidating
                    sport for everyone. We believe in the power of boxing to not only build physical strength
                    and resilience but also to foster camaraderie, discipline, and personal growth.
                </p>
                <br />
                <p class="text-center">
                    Located in the University of Ottawa Martial Arts room, our club is the perfect place for
                    students of all skill levels to come together and explore the exciting world of boxing.
                    Whether you're a complete beginner or an experienced fighter, we provide a supportive and
                    friendly environment where everyone can improve their skills, build self-confidence, and
                    achieve their goals. Join us today and discover the transformative power of boxing!
                </p>
            </div>
        </div>
    </div>
</div>

<div class="meettheteam mt-n5" id="meettheteam">
	<h1 class="text-center">Meet The Team</h1>
	<hr class="custom-hr" />
	<MeetTheTeam />
</div>

<div class="parallax-divider"></div>

<div class="register my-4" id="register">
	<h1 class="text-center">Register For Class</h1>
	<hr class="custom-hr" />
	<ClassRegistration />
</div>

<style>
    .parallax-divider {
        height: 300px;
        background-image: url('https://via.placeholder.com/1920x1080');
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .meettheteam {
        position: relative;
    }
    .meettheteam::before {
        content: '';
        position: absolute;
        top: -3%;
        left: 0;
        right: 0;
        height: 30%;
        background-color: #fff;
        transform-origin: top left;
        transform: skewY(-3deg);
        z-index: -1;
        border-top: 3px solid rgba(0, 0, 0, 0.842);
    }
    .mt-n5 {
        margin-top: -4rem;
    }
	.aboutus {
        padding-top: 90px;
        min-height: 630px;
        position: relative;
    }
    .aboutus::before {
        content: '';
        position: absolute;
        top: -5px;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://via.placeholder.com/1920x1080');
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        z-index: -2;
    }
	h1 {
		font-family: 'Source Sans Pro', sans-serif;
		font-size: 4rem;
		font-weight: bold;
		margin-bottom: 0.5rem;
	}
	.custom-hr {
		border: none;
		border-top: 3px solid rgba(0, 0, 0, 0.5);
		background-color: #7193ac;
		position: center;
		width: 45%;
		left: 0;
	}
	.custom-hr-light {
		border: none;
		border-top: 3px solid;
		background-color: #c3d0db;
		position: center;
		width: 45%;
		left: 0;
	}
	.page-container {
        background-color: #7193ac;
        font-family: 'Source Sans Pro', sans-serif;
        padding: 2rem 0;
        padding-top: 6rem;
        position: relative;
        display: flex;
        align-items: center;
        min-height: 650px;
    }

    .page-container:before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        background-color: #7193ac;
        transform-origin: bottom left;
        transform: skewY(3deg);
        z-index: -1;
        border-bottom: 3px solid rgba(0, 0, 0, 0.5);
    }
	.image-column {
		padding: 0;
	}
	.text-column {
		padding: 0;
	}
	.text-column h1 {
		font-size: 4rem;
		font-weight: bold;
		margin-bottom: 0.5rem;
	}
    .uO {
		color: #fff;
		margin-right: 0;
	}
	.lighter {
		color: #c3d0db;
	}
    .white {
		color: #fff;
	}
	.text-column p {
		font-size: 1.4rem;
		color: #fff;
		margin-bottom: 1.5rem;
	}
	.text-column button {
		background-color: #ffffff;
		border: none;
		border-radius: 2px;
		font-size: 1rem;
		font-weight: bold;
		color: #7193ac;
		padding: 12px 24px;
		cursor: pointer;
	}
</style>
