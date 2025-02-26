import plugin from 'tailwindcss/plugin';
import {
	Quote,
	ImageComponent,
	PullQuoteComponent,
	TableComponent,
	GalleryComponent,
	AudioComponent,
	CoverComponent,
	mediaAndText,
	ButtonsComponent,
	FileMediaComponent,
} from './components';
import { mergeToConfig } from './Config';
import { ColorUtilities, FontsUtilities } from './utilities';

/**
 * Tailwindcss plugin that maps WordPress block editor styles to tailwindcss classes.
 */
export default plugin(function ({ addUtilities, theme, addComponents }) {
	const color = new ColorUtilities(theme);
	const font = new FontsUtilities(theme);

	const quoteUtilities = Quote;

	const pullQuote = PullQuoteComponent;

	const table = TableComponent({
		alignFull: {
			minWidth: theme('screen.xl', '1280px'),
		},
		stripeColor: theme('colors.stripes', '#f2f2f2'),
	});

	const image = ImageComponent({
		alignFull: { minWidth: theme('screen.xl', '1280px') },
	});

	const gallery = GalleryComponent({
		alignFull: { minWidth: theme('screen.xl', '1280px') },
	});

	const audio = AudioComponent({
		alignFull: { minWidth: theme('screen.xl', '1280px') },
	});

	const cover = CoverComponent({
		alignFull: { minWidth: theme('screen.xl', '1280px') },
	});

	const buttons = ButtonsComponent({
		defaultColor: color.getColorByName('primary'),
	});

	const fileMedia = FileMediaComponent({
		defaultColor: color.getColorByName('primary'),
	});

	addUtilities([
		color.getBackgroundUtilities(),
		color.getBorderColorUtilities(),
		color.getColorUtilities(),
		color.getGradientUtilities(),
		font.getFontSizeUtilities(),
		font.dropCapUtilities,
		font.textAlignUtilities,
		quoteUtilities,
	]);

	addComponents([
		table,
		image,
		pullQuote,
		gallery,
		audio,
		cover,
		mediaAndText,
		buttons,
		fileMedia,
	]);
}, mergeToConfig);
