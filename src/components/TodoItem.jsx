import PropTypes from 'prop-types';

export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className="flex items-center justify-between bg-black shadow px-4 py-2 rounded">
      <div
        onClick={onToggle}
        className={`cursor-pointer flex-1 ${
          todo.done ? 'line-through text-gray-400' : ''
        }`}
      >
        {todo.text}
      </div>
      <button
        onClick={onDelete}
        className="ml-2 text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </div>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }).isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
