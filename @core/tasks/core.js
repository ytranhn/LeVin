import { VENDORS } from '../../vendors';
import { src, dest, series } from 'gulp';
import concat from 'gulp-concat';
import cleanCss from 'gulp-clean-css';
import uglify from 'gulp-uglify';
import strip from 'gulp-strip-comments';

export const cssCore = (cb) => {
	if (VENDORS.css.length > 0) {
		console.log(VENDORS.css);
		return src(VENDORS.css, {
			allowEmpty: true,
		})
			.pipe(concat('core.min.css'))
			.pipe(
				cleanCss({
					level: {
						1: {
							all: true,
							normalizeUrls: false,
							specialComments: false,
						},
					},
				}),
			)
			.pipe(dest('./_dist/css'));
	} else {
		console.log('Không có đường dẫn thư viện css để copy');
	}
	return cb();
};

export const jsCore = () => {
	if (VENDORS.js.length > 0) {
		console.log(VENDORS.js);
		return src(VENDORS.js, {
			allowEmpty: true,
		})
			.pipe(concat('core.min.js'))
			.pipe(strip())
			.pipe(uglify())
			.pipe(dest('./_dist/js'));
	} else {
		console.log('Không có đường dẫn thư viện js để copy');
	}
	return cb();
};

export const core = series(cssCore, jsCore);
