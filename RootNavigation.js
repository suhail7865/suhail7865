export function navigate(name, params) { 
    navigationRef.current?.navigate(name, params);
}