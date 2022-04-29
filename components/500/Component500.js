import { WrapperError } from '../404';

const websiteFaults = 'https://github.com/plantdink/planning-whale/issues';

export default function Component500() {
  return (
    <>
      <WrapperError>
        <div className="content">
          <div className="text">
            <div className="error__title-bar">
              <h1 className="error__heading">
                {' '}
                500 - An error on the server-side has occurred
              </h1>
            </div>
            <p>
              Well......this is embarrassing. It looks like the ISAC node that
              Agent Field Manual runs on needs to be rebooted (or something like
              that).
            </p>
            <p>
              Apologies for the issue. This is a solo development project so if
              you would like to let the developer know, raise an issue on the
              GitHub issues tracker.
            </p>
            <p>
              <h3>
                <a href={websiteFaults}>Report Website Issues, Bugs</a>
              </h3>
            </p>

            <p>
              Otherwise you might need to check back later and see if the
              Developer has finished at Jefferson Trade Center and got things
              working properly again.
            </p>
          </div>
        </div>
      </WrapperError>
    </>
  );
}
