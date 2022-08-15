import { Center, Table, Thead, Tbody, Tr, Th, Td, TableContainer } from "@chakra-ui/react";
// import { useTable } from 'react-table'

export default function GeophysicsTable() {
	return (
		<Center>
			<TableContainer width="max-content" justifyContent="center">
				<Table variant="simple">
					<Thead>
						<Tr>
							<Th width="50">Type</Th>
							<Th>Method</Th>
							<Th>Property</Th>
						</Tr>
					</Thead>

					<Tbody>
						{/* Seismic */}
						<Tr>
							<Th rowSpan={6}>Seismic</Th>

							<Td>Reflection</Td>
							<Td>Seismic impedance</Td>
						</Tr>
						<Tr>
							<Td>SRT</Td>
							<Td>vp and/or vs</Td>
						</Tr>
						<Tr>
							<Td>MASW</Td>
							<Td>v_surface</Td>
						</Tr>
						<Tr>
							<Td>HSVR</Td>
							<Td>???</Td>
						</Tr>
						<Tr>
							<Td>VSP</Td>
							<Td>vp and/or vs</Td>
						</Tr>
						<Tr>
							<Td>Seismic Interferometry</Td>
							<Td>vp and/or vs</Td>
						</Tr>

						{/* EM */}
						<Tr>
							<Th rowSpan={8}>EM</Th>

							<Td>GPR</Td>
							<Td>EM impedance</Td>
						</Tr>
						<Tr>
							<Td>ERT</Td>
							<Td>rho</Td>
						</Tr>
						<Tr>
							<Td>TEM</Td>
							<Td>rho</Td>
						</Tr>
						<Tr>
							<Td>FEM</Td>
							<Td>rho</Td>
						</Tr>
						<Tr>
							<Td>CSEM</Td>
							<Td>rho</Td>
						</Tr>
						<Tr>
							<Td>SP</Td>
							<Td>Electric potential</Td>
						</Tr>
						<Tr>
							<Td>TD IP</Td>
							<Td>Chargeability</Td>
						</Tr>
						<Tr>
							<Td>SIP</Td>
							<Td>Chargeability</Td>
						</Tr>

						{/* Potential Field */}
						<Tr>
							<Th rowSpan={2}>Potential Field</Th>

							<Td>Gravity</Td>
							<Td>g</Td>
						</Tr>
						<Tr>
							<Td>Magnetic</Td>
							<Td>Magenetic Field</Td>
						</Tr>

						{/* Radio Active */}
						<Tr>
							<Th rowSpan={3}>Radio Active</Th>

							<Td>Gamma Ray</Td>
							<Td>Gamma Rays</Td>
						</Tr>
						<Tr>
							<Td>Gamma Ray Density</Td>
							<Td>Density</Td>
						</Tr>
						<Tr>
							<Td>Neutron Porosity</Td>
							<Td>Porosity</Td>
						</Tr>

						{/* NMR */}
						<Tr>
							<Th>NMR</Th>
							<Td>NMR</Td>
							<Td>Nuclear Magnetic Resonance</Td>
						</Tr>
					</Tbody>
				</Table>
			</TableContainer>
		</Center>
	);
}
