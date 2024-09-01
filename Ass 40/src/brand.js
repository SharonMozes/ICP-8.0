const brandStyle = {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f2f2f2',
    borderRadius: '10px',
    margin: '20px',
    fontSize: '36px', 
    fontFamily: "'Cursive', sans-serif", 
    fontStyle: 'italic', 
    color: 'brown', 
    fontWeight: 'bold',
};

function BrandName() {
    return (
        <div style={brandStyle}>
            Sweety Bites
        </div>
    );
}

export default BrandName;
