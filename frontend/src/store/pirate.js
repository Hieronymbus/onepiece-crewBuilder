import { create } from 'zustand' ;

export const usePirateStore = create( (set) => ({
    pirates: [],
    setPirates:(pirates) => set({ pirates }),
    createPirate: async (newPirate, newPirateImage) => {
        
        if(
            !newPirate.name 
            || !newPirate.epithet 
            || !newPirate.age 
            || !newPirate.combatStyle 
            || !newPirate.role 
            || !newPirate.bounty 
            || !newPirateImage
        ){
            return {success: false, message:"Please fill in all fields"}
        }

        const form = new FormData();

        form.append("name",newPirate.name);
        form.append("epithet",newPirate.epithet );
        form.append("age" ,newPirate.age );
        form.append("combatStyle" ,newPirate.combatStyle );
        form.append("role" ,newPirate.role );
        form.append("bounty" ,newPirate.bounty );
        form.append("image" ,newPirateImage);
        
        const response = await fetch("/api/pirates/", {
            method: "POST",
            headers: {
                accept: "application/json "
            },
            body: form
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
    updatePirate: async () => {

    },
    deletePirate: async () => {

    }
}));