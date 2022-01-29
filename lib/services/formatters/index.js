
const formatUser = (userObj) => {
  const {
    id,
    name,
    mention_name,
    avatar_urls,
    _links,
    xprofile,
  } = userObj

  const userFields = xprofile.groups[0] ? xprofile.groups[0].fields : 'Pas d\'information'

  let user = {}
  user.id = id
  user.name = name
  user.tag_name = mention_name
  user.custom_fields = {}
  user.custom_fields.commercial_name = formatUserFields(userFields, "Nom commercial")
  user.custom_fields.full_name = formatUserFields(userFields, "Nom - Prénom")
  user.custom_fields.category = formatUserFields(userFields, "Secteur d'activité ")
  user.custom_fields.trade = formatUserFields(userFields, "Métier")
  user.custom_fields.phone = formatUserFields(userFields, "Téléphone ")
  user.custom_fields.website = formatUserFields(userFields, "Site internet")
  user.custom_fields.birthdate = formatUserFields(userFields, "Anniversaire ")
  user.custom_fields.mail = formatUserFields(userFields, "Mail")
  user.custom_fields.offer = formatUserFields(userFields, "Mon offre professionelle")
  user.custom_fields.intervention_area = formatUserFields(userFields, "Zone d'intervention")
  user.custom_fields.description = formatUserFields(userFields, "Description")
  user.avatar = avatar_urls
  user.serre_url = _links.self[0].href

  console.log(`USER : ${JSON.stringify(user)}`)
  return user
}

const formatUserFields = (userFieldsObj, fieldName) => {
  
  for(let f in userFieldsObj) {
    const {
      name,
      value,
    } = userFieldsObj[f]

    if (name == fieldName)
      return value ? value.raw : ""
  }
}

const formatFilteredUser = (users, filters, typeAndOr) => {

  if (!typeAndOr) {
    typeAndOr = 'OR'
  }
  if (!filters) {
    return users
  }

  const filtered = users.filter((user) => {
    const connected_connectors = user.connected_connectors

    if (filters === 'none') {
      if (connected_connectors.length === 0) {
        return user
      }
    } else {
      if (connected_connectors) {

        if (typeAndOr === 'AND') {
          const typesSet = new Set(connected_connectors.map(connector => connector.type))

          const matchedAnd = filters.every(filter => typesSet.has(filter))

          if (matchedAnd) {
            return user
          }
        } else if (typeAndOr === 'OR') {
          const matchedOr = connected_connectors.filter((connector) => filters.includes(connector.type))

          if (matchedOr.length > 0) {
            return user
          }
        }
      }
    }
  })

  return filtered
}

export default {
  formatUser,
  formatUserFields,
  formatFilteredUser,
  // formatCategory,
  // formatTrade,
}
