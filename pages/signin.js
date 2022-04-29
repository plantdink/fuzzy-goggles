import RequestReset from '../components/RequestReset';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

export default function SigInPage() {
  return (
    <div>
      <SignIn />
      <SignUp />
      <RequestReset />
    </div>
  );
}
