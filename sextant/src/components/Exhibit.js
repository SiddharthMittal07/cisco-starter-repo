const Exhibit = ({ title, children }) => {
    return (
        <div className="exhibit">
            <h3>{title}</h3>
            <div>{children}</div>
        </div>
    );
}

export default Exhibit;