<template>
<!-- https://tutorialzine.com/2015/01/freebie-5-responsive-footer-templates -->
<footer id="footer" class="footer-distributed bg-nastojte">
			<div class="footer-left">
                <h3 class="title-nastojte"><img :src="ico" height="36px" class="d-inline-block align-top mr-3" alt="Logo">{{ title }}</h3>
				<!--<h3>Company<span>logo</span></h3>-->

				<p class="footer-links">
					<a href="/">O mně</a>
					·
					<a href="/#what">Služby</a>
					·
					<a href="/#pricing">Ceník</a>
					·
					<a href="/references">Reference</a>
					·
					<a href="/vonnegut">Proč nastojte?</a>
				</p>

				<p class="footer-company-name">Adam Kučera a <a href="/attributions">další</a> &copy; 2021.</p>
			</div>

			<div class="footer-center">

				<div>
					<b-icon-geo-alt-fill class="nastojte-i" />
					<p><span>Voříškova 45</span> 623 00 Brno</p>
				</div>

				<div>
					<b-icon-telephone-fill class="nastojte-i"/>
					<a href="tel:+420775397795">+420 775 397 795</a>
				</div>

				<div>
					<b-icon-envelope-fill class="nastojte-i nastojte-envelope"/>
					<p><a :href="`mailto:${email}`" @click="decode" target="_blank" v-html="email"></a></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>RNDr. Adam Kučera</span>
					IČ 06422268<br />
                    Neplátce DPH<br />
                    Datová schránka: bbsra52
				</p>

				<div class="footer-icons">

					<!--<a href="https://navolnenoze.cz/prezentace/adam-kucera/"><i class="ico-navolnenoze"></i></a>-->
                    <a href="https://m.me/oookoook" rel="noopener" target="_blank"><b-icon-facebook /></a>
					<!--<a href="https://medium.com/@akucera"><i class="ico-medium"></i></a>-->
                    <a href="https://www.linkedin.com/in/adam-kucera-sw-dev/" rel="noopener" target="_blank"><!--<i class="fa fa-linkedin"></i>--><b-icon-linkedin /></a>
					<a href="https://github.com/oookoook" rel="noopener" target="_blank"><b-icon-github /></a>

				</div>

			</div>

		</footer>
</template>
<script>

import Email from './Email.vue';
import { BIconLinkedin, BIconFacebook, BIconGithub, BIconGeoAltFill, BIconTelephoneFill, BIconEnvelopeFill } from 'bootstrap-vue'

export default {
    name: "Footer",
    mixins: [Email],
    props: { title: String, ico: String },
	components: {
		//BIcon,
		BIconLinkedin,
		BIconFacebook, 
		BIconGithub, 
		BIconGeoAltFill, 
		BIconTelephoneFill, 
		BIconEnvelopeFill
	}
}
</script>
<style scoped>
.footer-distributed{
	box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
	box-sizing: border-box;
	width: 100%;
	text-align: left;
	font: bold 16px sans-serif;

	padding: 55px 50px;
	margin-top: 80px;
}

.footer-distributed .footer-left,
.footer-distributed .footer-center,
.footer-distributed .footer-right{
	display: inline-block;
	vertical-align: top;
}

/* Footer left */

.footer-distributed .footer-left{
	width: 40%;
}

/* The company logo */

.footer-distributed h3{
	color:  #FFD447;
	font-size: 30px;
	margin: 0;
}

.footer-distributed h3 span{
	color:  #5383d3;
}

/* Footer links */

.footer-distributed .footer-links{
	color:  #ffffff;
	margin: 20px 0 12px;
	padding: 0;
}

.footer-distributed .footer-links a{
	display:inline-block;
	line-height: 1.8;
	text-decoration: none;
	color:  inherit;
}

.footer-distributed .footer-company-name{
	color:  #8f9296;
	font-size: 14px;
	font-weight: normal;
	margin: 0;
}

/* Footer Center */

.footer-distributed .footer-center{
	width: 35%;
}

.footer-distributed .footer-center .nastojte-i{
	/* background-color:  #33383b;
	color: #ffffff;*/
    color: #FFD447;
	/* font-size: 25px; */
	width: 20px;
	height: 20px;
	border-radius: 50%;
	text-align: center;
	line-height: 42px;
	margin: 10px 15px;
	vertical-align: middle;
}

.footer-distributed .footer-center .nastojte-envelope{
	font-size: 17px;
	line-height: 38px;
}

.footer-distributed .footer-center p{
	display: inline-block;
	color: #ffffff;
	vertical-align: middle;
	margin:0;
}

.footer-distributed .footer-center p span{
	display:block;
	font-weight: normal;
	font-size:14px;
	line-height:2;
}

/*
.footer-distributed .footer-center p a{
	color:  #5383d3;
	text-decoration: none;;
}
*/

/* Footer Right */

.footer-distributed .footer-right{
	width: 20%;
}

.footer-distributed .footer-company-about{
	line-height: 20px;
	color:  #92999f;
	font-size: 13px;
	font-weight: normal;
	margin: 0;
}

.footer-distributed .footer-company-about span{
	display: block;
	color:  #ffffff;
	font-size: 14px;
	font-weight: bold;
	margin-bottom: 20px;
}

.footer-distributed .footer-icons{
	margin-top: 25px;
}

.footer-distributed .footer-icons a{
	display: inline-block;
	width: 35px;
	height: 35px;
	cursor: pointer;
	/* background-color:  #33383b; */
	border-radius: 2px;

	font-size: 20px;
	/* color: #ffffff; */
    color: #FFD447;
	text-align: center;
	line-height: 35px;

	margin-right: 3px;
	margin-bottom: 5px;
}

.footer-company-name > a {
	color: inherit;
	text-decoration: underline;
}

/* If you don't want the footer to be responsive, remove these media queries */

@media (max-width: 880px) {

	.footer-distributed{
		font: bold 14px sans-serif;
	}

	.footer-distributed .footer-left,
	.footer-distributed .footer-center,
	.footer-distributed .footer-right{
		display: block;
		width: 100%;
		margin-bottom: 40px;
		text-align: center;
	}

	.footer-distributed .footer-center i{
		margin-left: 0;
	}

}
</style>