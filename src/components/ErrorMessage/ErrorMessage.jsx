import { toast } from 'react-hot-toast';

const ErrorMessage = () => {
  toast.error('You must enter text to search for an image');
  return null;
};

export default ErrorMessage;
