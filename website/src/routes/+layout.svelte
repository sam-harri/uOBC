<script lang="ts">
	function scrollToSection(event: MouseEvent, targetId: string) {
		event.preventDefault();
		const targetElement = document.querySelector(targetId);

		if (targetElement) {
			targetElement.scrollIntoView({ behavior: 'smooth' });
		}
	}
</script>

<nav class="navbar navbar-expand-lg navbar-light bg-transparent fixed-top">
	<a class="navbar-brand" href="/">
		<img src="path/to/your/logo.png" alt="Logo" style="width:100px;" />
	</a>
	<div class="collapse navbar-collapse" id="navbarNav">
		<ul class="navbar-nav ml-auto">
			<li class="nav-item">
				<a
					class="nav-link"
					href="#register"
					on:click={(event) => scrollToSection(event, '#register')}>Register for Class</a
				>
			</li>
			<li class="nav-item">
				<a
					class="nav-link"
					href="#meettheteam"
					on:click={(event) => scrollToSection(event, '#meettheteam')}>Meet The Team</a
				>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="#aboutus" on:click={(event) => scrollToSection(event, '#aboutus')}
					>About Us</a
				>
			</li>
		</ul>
	</div>
</nav>

<slot></slot>

<footer class="footer">
    <div class="container">
        <div class="row">
            <div class="col-12 d-flex justify-content-center align-items-center">
                <p class="text-white mb-0">Connect With Us On Social Media</p>
                <a href="https://discord.com/invite/43hR39pqk2" class="btn btn-discord ml-3 mr-2">
                    <i class="fab fa-discord"></i>
                </a>
                <a href="https://www.instagram.com/uottawaboxingclub/?hl=en" class="btn btn-instagram">
                    <i class="fab fa-instagram"></i>
                </a>
            </div>
        </div>
    </div>
</footer>



<style>
	.navbar {
		font-family: 'Source Sans Pro', sans-serif;
		font-weight: 600;
		font-size: larger;
		border-bottom: 1px solid rgba(0, 0, 0, 0.5);
	}
	.nav-link {
		cursor: pointer;
	}
    .footer {
        background-color: #7193ac;
        padding: 1rem 0;
    }
    .btn-discord {
        background-color: #7289da;
        color: white;
        border: none;
        font-size: 1.5rem;
    }
    .btn-discord:hover {
        background-color: #5865F2;
    }
    .btn-instagram {
        background-color: #E1306C;
        color: white;
        border: none;
        font-size: 1.5rem;
    }
    .btn-instagram:hover {
        background-color: #BD2F56;
    }
    .footer p {
        font-size: 1.2rem;
    }
</style>
