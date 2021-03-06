import PropTypes from 'prop-types';


const Modal = (props) => {
  const {
    show,
    body,
    header,
    onHide
  } = props;

  return (
    <div className={`fixed z-10 inset-0 overflow-y-auto ${show == true || 'hidden'}`}>
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                  {header}
                </h3>
                <div className="mt-2">
                  {body}
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 px-4 py-3 sm:px-6">
            <button type="button" onClick={() => onHide()} className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  show: PropTypes.bool,
  header: PropTypes.string,
  body: PropTypes.element,
  onHide: PropTypes.func
}

Modal.defaultProps = {
  show: false,
}


export default Modal
