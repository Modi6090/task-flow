import { Edit2, Trash2, Calendar, CheckCircle, Circle, Clock } from 'lucide-react';

const TaskCard = ({ task, onEdit, onDelete, onToggleStatus }) => {
    const statusColors = {
        'Pending': 'bg-yellow-50 text-yellow-700 border-yellow-200',
        'In Progress': 'bg-blue-50 text-blue-700 border-blue-200',
        'Completed': 'bg-green-50 text-green-700 border-green-200',
    };

    const statusIcons = {
        'Pending': <Circle className="h-4 w-4" />,
        'In Progress': <Clock className="h-4 w-4" />,
        'Completed': <CheckCircle className="h-4 w-4" />,
    };

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow p-5">
            <div className="flex justify-between items-start mb-3">
                <span className={`px-2.5 py-1 rounded-full text-xs font-medium border flex items-center gap-1.5 ${statusColors[task.status]}`}>
                    {statusIcons[task.status]}
                    {task.status}
                </span>
                <div className="flex gap-2">
                    <button
                        onClick={() => onEdit(task)}
                        className="p-1.5 hover:bg-gray-50 rounded-md text-gray-500 hover:text-indigo-600 transition-colors"
                        title="Edit"
                    >
                        <Edit2 className="h-4 w-4" />
                    </button>
                    <button
                        onClick={() => onDelete(task._id)}
                        className="p-1.5 hover:bg-red-50 rounded-md text-gray-500 hover:text-red-600 transition-colors"
                        title="Delete"
                    >
                        <Trash2 className="h-4 w-4" />
                    </button>
                </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-2">{task.title}</h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {task.description || 'No description provided.'}
            </p>

            {task.dueDate && (
                <div className="flex items-center gap-2 text-xs text-gray-500 mt-auto pt-3 border-t border-gray-50">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>Due: {new Date(task.dueDate).toLocaleDateString()}</span>
                </div>
            )}
        </div>
    );
};

export default TaskCard;
