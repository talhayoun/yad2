import React from 'react';

const Neighborhood = ({assetType}) => {
    return(
        <div>
            <h6 className={assetType === "דירה או אולי פנטהאוז" ? "steps-disabled-header" : ""}>שכונה</h6>
            <input className={assetType === "דירה או אולי פנטהאוז" ? "steps-disabled-input" : ""}
                disabled={assetType === "דירה או אולי פנטהאוז" ? true : false} />
        </div>
    )
}

export default Neighborhood;