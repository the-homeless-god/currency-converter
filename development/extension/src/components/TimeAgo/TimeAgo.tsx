import React, { useRef, useEffect } from 'react';
import { format, cancel, render } from 'timeago.js';
import { Opts, TDate } from 'timeago.js/lib/interface';
export { Opts, TDate };

const toDateTime = (input: TDate): string => {
  return '' + (input instanceof Date ? input.getTime() : input);
};

export interface TimeAgoProps extends React.ComponentProps<'time'> {
  readonly datetime: TDate; // date to be formatted
  readonly live?: boolean; // real time render.
  readonly opts?: Opts;
  readonly locale?: string; // locale lang
}

const TimeAgo = ({
  datetime,
  live = true,
  locale,
  opts,
  ...others
}: TimeAgoProps) => {
  const domRef = useRef<HTMLTimeElement>(null);

  useEffect(() => {
    // fixed #6 https://github.com/hustcc/timeago-react/issues/6
    // to reduce the file size.
    // const { locale } = this.props;
    // if (locale !== 'en' && locale !== 'zh_CN') {
    //   timeago.register(locale, require('timeago.js/locales/' + locale));
    // }
    // render it.
    renderTimeAgo();

    return () => {
      // remove
      if (domRef.current) {
        cancel(domRef.current);
      }
    };
  }, []);

  useEffect(() => {
    renderTimeAgo();
  });

  const renderTimeAgo = () => {
    if (domRef.current) {
      // cancel all the interval
      cancel(domRef.current);
      // if is live
      if (live !== false) {
        // live render
        domRef.current?.setAttribute('datetime', toDateTime(datetime));

        render(domRef.current, locale, opts);
      }
    }
  };

  return (
    <time ref={domRef} {...others}>
      {format(datetime, locale, opts)}
    </time>
  );
};

export default React.memo(TimeAgo);
