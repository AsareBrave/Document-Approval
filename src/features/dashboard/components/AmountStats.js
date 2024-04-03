

function AmountStats({}){
    return(
        <div className="stats bg-base-100 shadow">
            <div className="stat">
                <div className="stat-title">Total number of document</div>
                <div className="stat-value">20</div>
                <div className="stat-actions">
                    <button className="btn btn-xs">View Document</button> 
                </div>
            </div>
            
            <div className="stat">
                <div className="stat-title">Total number of unapproved document</div>
                <div className="stat-value">5</div>
                <div className="stat-actions">
                    <button className="btn btn-xs">View Document</button> 
                </div>
            </div>
        </div>
    )
}

export default AmountStats