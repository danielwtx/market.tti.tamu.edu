TTI.glossary = {
    "Discount Rate": " Translates future costs and benefits into present-day values to account for the time value of money. A high discount rate may reduce future benefits and costs to smaller present values; whereas a lower rate reduces future values less, causing the value of future benefits and costs to be closer to current dollar values. ",
    "Travel Growth Rate": " average annual growth rate of vehicles traveling on roadways ",
    "One Time Change in Land Value due to New Service": " Initial, one time increase in property values within a quarter- or half-mile radius of the new station.",
    "Economic Activity (Economy Wide)": "The resulting change in a city’s economy. This value is calculated by multiplying the production value by the final demand variable for each industry. It is the total impact of all direct, induced, and indirect economic activity resulting from the sectors or activity considered in the analysis. ",
    "Vehicle Operating Cost Savings":  "Vehicle operating costs include, but are not limited to: fuel, purchase payments, insurance premiums, tires, and repairs.",
    "Business Time and Reliability Cost Savings": " Savings associated with the ability to maintain relatively stable travel time variability, or how long it takes to complete the same trip on different days with commercial vehicles. In other words, the variable represents reduced business operating costs that occurs when travel time variability associated with traffic congestion is diminished. ",
    "Personal Time and Reliability Cost Savings": "Savings associated with the ability to maintain relatively stable travel time variability, or how long it takes to complete the same trip on different days with passenger vehicles.",
    "Safety Benefits": "The reduction in average crash rates (per 100 million VMT) for all modes, and average costs incurred for each crash type ($/accident).",
    "Logistics/Freight Cost Savings": " Savings related to costs for freight handling, including costs of loading dock handling, inventory warehousing, and product delivery. ",
    "Business Output": " The value of business production. For productivity analysis, it is measured as net value added. (For other analyses, it may be measured as gross business revenue.)",
    "Positive Economic Effect of Wage Income": " The degree to which wage compensation is positively affected by the effects of commuting time reliability on business productivity.",


    "Capital Costs":"Capital Costs include startup costs to initialize, design, and construct the project.",
    "O&M Costs":" Costs to operate and maintain the improvement.",


    "Benefit/Cost Ratio": "The benefit/cost ratio is simply the total benefits derived from the project divided by the total cost of the project. A benefit/cost ratio of greater than 1.0 is positive (the benefits of building the project outweigh the cost).",
    "Construction Jobs":"Jobs attributed to capital investment",
    "O&M Jobs":"Jobs attributed to the investment in Operations & Maintenance",
    "Commercial": "Parcels with land and improvements associated with businesses that sell goods or services to the general public.",
    "Industrial": " Parcels with land and improvements of businesses that add value to a product through development, manufacturing, fabrication or processing of that product.",
    "Multi-Family (MF) Residential": " Parcels with residential improvements containing two or more residential units under single ownership. Properties classified as MF Family generally include apartment complexes.",
    "No Data": " Includes parcels with no data present.",
    "Open Space/ Agriculture": " Parcels with acreage qualified for productivity (e.g. farming) valuation under Texas Constitution, Article VIII, 1-d or 1-d-1, and Tax Code Chapter 23, Subchapters C, D, E and H. Also includes rural land that is not qualified for productivity valuation and the improvements, including residential, on that land. Rural land in this category is outside of the city limits and is not considered personal property.    ",

    "Other": "Includes all other Texas Property Classifications not included in the condensed classifications. The majority of these classification deal with tangible and intangible personal property used for residential, commercial, industrial, or utility purposes.",

    "Rail": " A subgroup of the ‘Utilities’ property code. Includes parcels with railroad rolling stock used in the operation of a railroad.",

    "Single-Family (SF) Residential": " Parcels with single-family residential improvements and land on which they are situated. Typically, SF Residential properties are single-family homes on tracts of land or platted lots. Townhouses, condominiums, row houses, owner-occupied duplexes, and mobile homes are also included in this category.",

    "Utilities": "Parcels that include the real and personal property of utility companies and co-ops.",

    "Vacant": " Unimproved land parcels usually located within or adjacent to cities with no minimum or maximum size requirement including Colonia properties that may not be sold pursuant to Local Government Code Chapter 232.",
};

TTI.createTooltips = function() {
    var fileUrl = '/data/glossary.json';
    var items = Object.keys(TTI.glossary);
    items.forEach(function(k) {
        var searchSpace = ['label', 'td:first-child'];
        searchSpace.forEach(function(kk) {
            var wrap = $(kk + ':contains(' + k + ')');
            wrap.attr('data-toggle', 'tooltip').attr('title', TTI.glossary[k]);
            wrap.tooltip({
                'selector': '',
                'placement': 'top',
                'container': 'body',
            });

        });


    });
    // TTI.importJSON('/data/glossary.json', function(data) {
    //     TTI.glossary = data;
    //     items = Object.keys(data);
    //     items.forEach(function(k) {
    //         $('b:contains(k)').attr('data-toggle', 'tooltip').attr('title', items[k]).tooltip();
    //     });
    // });
}
