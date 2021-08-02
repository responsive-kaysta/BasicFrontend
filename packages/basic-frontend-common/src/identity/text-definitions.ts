// -------------------------------------------------------------------------------
// titles ->
// -------------------------------------------------------------------------------

export const defTitleSub =
  'text-xl font-semibold md:text-2xl md:font-bold tracking-wider leading-normal';

export const defTitleAbstract =
  'text-xl font-semibold md:text-2xl md:font-bold uppercase tracking-wider leading-normal';

export const defTitle =
  'text-xl md:text-2xl font-semibold md:font-bold tracking-wider leading-normal';

// -------------------------------------------------------------------------------
// texts ->
// -------------------------------------------------------------------------------

export const defTextRegular =
  'text-base font-normal md:text-lg md:font-medium tracking-wide leading-normal';

export const defTextLead =
  'text-lg font-medium md:text-xl md:font-semibold tracking-wider leading-normal';

export const defLegend =
  'text-base font-medium md:text-lg md:font-medium leading-normal';

export const defLabel =
  'text-base font-medium md:text-lg md:font-medium leading-normal';

export const defComment =
  'text-sm font-medium md:text-base md:font-medium leading-normal italic';

export const defLink =
  'text-base font-normal md:text-lg md:font-medium tracking-wide leading-normal';

export const defCaption =
  'text-sm font-normal md:text-base md:font-medium leading-normal uppercase';

export const defFormError =
  'text-base font-medium md:text-base md:font-medium leading-normal';

// -------------------------------------------------------------------------------
// buttons
// -------------------------------------------------------------------------------

export const defButtonSmall = 'text-base leading-4';

export const defButtonNormal = 'text-xl leading-5 font-medium';

// -------------------------------------------------------------------------------
// margin / padding
// -------------------------------------------------------------------------------

export const defTopMaring = 'mt-4';

export const defTextMargin = (marginBottom: boolean, marginTop: boolean) => {
  return `${marginBottom ? 'mb-4' : ''} ${marginTop ? 'mt-4' : ''}`;
};

export const defTextPadding = (paddingBottom: boolean, paddingTop: boolean) => {
  return `${paddingBottom ? 'pb-4' : ''} ${paddingTop ? 'pt-4' : ''}`;
};
