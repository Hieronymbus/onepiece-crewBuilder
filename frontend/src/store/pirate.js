import { create } from 'zustand' ;

export const usePirateStore = create( (set) => ({
    pirates: [],
    setPirates:(pirates) => set({ pirates }),
    createPirate: async (newPirate) => {
        
        if(
            !newPirate.name 
            || !newPirate.epithet 
            || !newPirate.age 
            || !newPirate.combatStyle 
            || !newPirate.role 
            || !newPirate.bounty 
            || !newPirate.image
        ){
            return {success: false, message:"Please fill in all fields"}
        }

        const response = await fetch("/api/pirates/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPirate)
        })
        const data = await response.json()

        set(prev => ({pirates: [...prev.pirates, data.data ],}));

        return { success: true, message:"Pirate Successfully Created"};

    },
    readPirates: async () => {
        const response = await fetch("/api/pirates/");
        const data = await response.json();
        set({pirates: data.data})
    },
}));