import React, {useState, useRef} from 'react'
import { usePirateStore } from '../store/pirate';

const PirateFormModal = ({ setIsModalOpen }) => {

    const { createPirate } = usePirateStore()

    const [newPirate, setNewPirate] = useState({
        name: '',
        epithet: '',
        age: '',
        combatStyle: '',
        role: '',
        bounty: '',
    });
    
    const imageInputRef = useRef(null)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewPirate((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Here you would typically send the data to your backend
        // Example: await fetch('/api/pirates', { method: 'POST', body: JSON.stringify(formData) });

        const newPirateImage = imageInputRef.current.files[0]

        await createPirate(newPirate, newPirateImage)

        // Reset form or provide feedback
        setNewPirate({
            name: '',
            epithet: '',
            age: '',
            combatStyle: '',
            role: '',
            bounty: '',
        });
        imageInputRef.current.value = null;

        setIsModalOpen(false);

    };

    const combatStyles = [
        'Hand to Hand',
        'Swordsman',
        'Sniper',
        'Support',
        'Healer',
      ];
    
    const roles = [
        'Navigator',
        'Cook',
        'Lookout',
        'Helmsman',
        'Crew Leader',
        'Shipwright',
        'Doctor',
        'Boatswain',
    ];

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <form
                onSubmit={handleSubmit}
                className="max-w-md w-full p-4 bg-gray-200 rounded shadow-2xl"
            >
                <h2 className="text-lg font-bold mb-4">Create a Pirate</h2>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={newPirate.name}
                        onChange={handleChange}
                        className="border rounded w-full p-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="epithet" className="block text-sm font-medium mb-1">Epithet:</label>
                    <input
                        type="text"
                        id="epithet"
                        name="epithet"
                        value={newPirate.epithet}
                        onChange={handleChange}
                        className="border rounded w-full p-2"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="age" className="block text-sm font-medium mb-1">Age:</label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        value={newPirate.age}
                        onChange={handleChange}
                        className="border rounded w-full p-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="combatStyle" className="block text-sm font-medium mb-1">Combat Style:</label>
                    <select
                        id="combatStyle"
                        name="combatStyle"
                        value={newPirate.combatStyle}
                        onChange={handleChange}
                        className="border rounded w-full p-2"
                        required
                    >
                        <option value="">Select Combat Style</option>
                        {combatStyles.map((style) => (
                            <option key={style} value={style}>{style}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="role" className="block text-sm font-medium mb-1">Role:</label>
                    <select
                        id="role"
                        name="role"
                        value={newPirate.role}
                        onChange={handleChange}
                        className="border rounded w-full p-2"
                        required
                    >
                        <option value="">Select Role</option>
                        {roles.map((role) => (
                            <option key={role} value={role}>{role}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="bounty" className="block text-sm font-medium mb-1">Bounty:</label>
                    <input
                        type="number"
                        id="bounty"
                        name="bounty"
                        value={newPirate.bounty}
                        onChange={handleChange}
                        className="border rounded w-full p-2"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="image" className="block text-sm font-medium mb-1">Upload Image:</label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*" 
                        ref={imageInputRef}
                        className="border rounded w-full p-2"
                    />
                </div>

                <button 
                    className="mr-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                    onClick={handleCloseModal}
                >
                    Cancel
                </button>
                <button 
                    type="submit" 
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                    Create Pirate
                </button>
            </form>
        </div>
    );
}

export default PirateFormModal