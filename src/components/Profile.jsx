

const Profile=()=>{
   
    return (
        <>
        <h1>Profile card challenge</h1>
        <ProfileCard 
        name="Eram" 
        age="24"
        greeting={
            <div>
                <strong>Hello , Welcome to jsr</strong>
            </div>
        }>
         <p>Hobbies : Reading , Swimming</p>
         <button>Contact</button>
        </ProfileCard>

        <ProfileCard 
        name="Faiz" 
        age="20"
        greeting={
            <div>
                <strong>Hello , Welcome to Delhi</strong>
            </div>
        }>
         <p>Hobbies : Hiking, planting</p>
         <button>Contact</button>
        </ProfileCard>
        </> 
    );
};

export default Profile;

function ProfileCard({name, age, greeting, children}){
    return (
        <>
        <h2>Name : {name}</h2>
        <p>Age : {age}</p>
        {greeting}
        <div>{children}</div>
        </>
    );
}