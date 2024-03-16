// components/ProfilePage.js

const ProfilePage = () => {
    // Sample user data
    const user = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      age: 30,
      address: '123 Main St, City, Country',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet justo sit amet est aliquam, et scelerisque nibh ullamcorper.'
    };
  
    return (
      <div className="container mx-auto py-8">
        <h2 className="text-xl font-semibold mb-4">Profile Page</h2>
  
        {/* User information */}
        <div className="bg-white p-4 shadow rounded-lg">
          <h3 className="text-lg font-semibold mb-4">User Information</h3>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Age:</strong> {user.age}</p>
          <p><strong>Address:</strong> {user.address}</p>
          <p><strong>Bio:</strong> {user.bio}</p>
        </div>
      </div>
    );
  };
  
  export default ProfilePage;
  